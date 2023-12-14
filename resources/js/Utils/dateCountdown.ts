/**
 * Calculates the countdown from the current date to the given event date.
 * @param {string} date - The event date in string format.
 * @return {Object} An object containing the countdown details:
 *                  - days: The number of remaining days until the event.
 *                  - hours: The remaining hours formatted as a two-digit string (e.g. "03").
 *                  - minutes: The remaining minutes formatted as a two-digit string (e.g. "08").
 *                  - seconds: The remaining seconds formatted as a two-digit string (e.g. "12").
 */
function dateCountdown(date: string): { days: number; hours: string; minutes: string; seconds: string } {
    let now = new Date();
    let eventDate = new Date(date);
    let currentTime = now.getTime();
    let eventTime = eventDate.getTime();
    let remTime = eventTime - currentTime;

    let s = Math.floor(remTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    const formatNumber = (num: number): string => (num < 10 ? "0" + num : String(num));

    return {
        days: d,
        hours: formatNumber(h),
        minutes: formatNumber(m),
        seconds: formatNumber(s),
    };
}
