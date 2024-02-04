/**
 * Streams audio data for playback using the MediaSource API.
 * @param {ReadableStream} audioStream - The audio stream data.
 */
async function streamAudioData(audioStream) {
    console.log("🚀 ~ streamAudioData ~ audioStream:", audioStream)
    // const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const mediaSource = new MediaSource();
    const audioElement = document.getElementById('audioPlayback');
    audioElement.src = URL.createObjectURL(mediaSource);

    mediaSource.addEventListener('sourceopen', async () => {
        const sourceBuffer = mediaSource.addSourceBuffer('audio/mpeg'); // Adjust the mime type based on your audio format

        const reader = audioStream.getReader();

        async function readAndAppend() {
            const { done, value } = await reader.read();

            if (done) {
                // Wait until all SourceBuffers have finished updating before calling endOfStream()
                const waitForUpdates = Array.from(mediaSource.sourceBuffers).map(sb => {
                    return new Promise(resolve => {
                        if (sb.updating) {
                            sb.addEventListener('updateend', function onUpdateEnd() {
                                sb.removeEventListener('updateend', onUpdateEnd);
                                resolve();
                            });
                        } else {
                            resolve();
                        }
                    });
                });

                Promise.all(waitForUpdates).then(() => {
                    mediaSource.endOfStream();
                });

                return;
            }

            // Wait until the first SourceBuffer is not updating before appending the next buffer
            function appendWhenReady() {
                const firstSourceBuffer = mediaSource.sourceBuffers[0];
                if (firstSourceBuffer && firstSourceBuffer.updating) {
                    firstSourceBuffer.addEventListener('updateend', appendWhenReady);
                } else if (firstSourceBuffer) {
                    firstSourceBuffer.removeEventListener('updateend', appendWhenReady);
                    firstSourceBuffer.appendBuffer(value);
                    readAndAppend();
                }
            }

            appendWhenReady();
        }

        // Call the function to start reading and appending audio chunks
        readAndAppend();

    });
}
