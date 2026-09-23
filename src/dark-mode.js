let isDarkMode = true
document.onclick = () => {
        isDarkMode = !isDarkMode

        console.log('CLICKED')
        console.log({isDarkMode})

        if (isDarkMode) {
                document.documentElement.dataset.theme = 'dark'
        }
        else {
                document.documentElement.dataset.theme = ''
        }
}