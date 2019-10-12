const TEXT = process.env.POPCLIP_TEXT;

function addOrRemoveCommaForNumber(number) {
    if (!number) throw new Error('no target number exists!');

    if (number.includes(",")) {
        return number.replace(/,/g, "");
    }

    var chunks = []
    while (number.length > 3) {
        chunks.push(number.slice(number.length-3));
        number = number.slice(0, number.length-3);
    }
    chunks.push(number);
    return chunks.reverse().join(",");
}

function main() {
    console.log(addOrRemoveCommaForNumber(TEXT));
}

main();