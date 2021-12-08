export const time = () => {

    const timer = document.createElement("div");
    timer.setAttribute("id", "timer")
    document.getElementById("app").appendChild(timer);


    let timeLeft = 60;
    let downloadTimer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("timer").innerHTML = "00:00";
            return;
        }
        timeLeft -= 1;

        document.getElementById("timer").innerHTML = prettyPrint(timeLeft);

    }, 1000);

    function prettyPrint(timeLeft) {
        if (timeLeft >= 10) {
            return '00' + ':' + timeLeft;
        } else {
            return '00' + ':' + '0' + timeLeft;
        }
    }

}