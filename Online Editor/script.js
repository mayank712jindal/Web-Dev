let langId = 4;

$(".submit").on("click", () => {
    let sampleCode = $("#codeArea").val();

    sendData(sampleCode)
})


$("#lang").change(() => {
    var element = $('option:selected').val()
    langId = element;
});

function sendData(sampleCode) {
    $.post(`https://codequotient.com/api/executeCode`,
        {
            code: `${sampleCode}`,
            langId: `${langId}`
        },
        (data, status) => {
            alert(`Data= ${data} and Status= ${status} `)
        }
    )
}