const ytv = require("ytv");
const parameter = process.argv[2] || "UF9B2n3r2Ls";
const delayBetweenRequests = 3000;

async function processUrlsWithDelay(parameter) {
    if (typeof parameter === 'string') {
        await processUrl(parameter);
    } else if (Array.isArray(parameter)) {
        for (const url of parameter) {
            await processUrl(url);
            await delay(delayBetweenRequests);
        }
    }
}

async function processUrl(url) {
    try {
        const info = await ytv.get_info(`https://www.youtube.com/watch?v=${url}`);
        if (info === "ERROR") {
            console.log(info)
            return "ERROR"
        } else {
            console.log(info)
            console.log('Успех: ' + url);
            return 'Успех';
        }
    } catch (error) {
        console.error(`Ошибка при обработке URL: ${url}, подробности ошибки: ${error}`);
        return "ERROR"
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

processUrlsWithDelay(parameter);
