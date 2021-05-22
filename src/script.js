const ignorelist = []

function clear() {
    const threads = document.getElementsByClassName(`thread`)

    for (const thread of threads) {
        const content = thread.textContent.toLowerCase()

        for (const ignore of ignorelist) {
            if (content.includes(ignore)) {
                thread.remove()
            }
        }
    }
}

setInterval(clear, 100)
