function createAnalytics(params) {
    let counter = 0;
    let isDestroyed = false;

    const listener = () => counter++;
    document.addEventListener('click', listener);
    return {
        destroy() {
            document.removeEventListener('click', listener);
            isDestroyed = true;
        },
        getClicks() {
            return isDestroyed ? "Destroyed" : counter;
        }
    }
}

window.analytics = createAnalytics();