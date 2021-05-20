let langId = 4;
let codeID;
$(".submit").on("click", () => {
    let sampleCode = $("#codeArea").val();

    sendData(sampleCode)
})


$("#lang").change(() => {
    var element = $('option:selected').val()
    langId = element;
});

// forboth get and post request the url used is CodeQuotient.
// can't use on localhost
function sendData(sampleCode) {
    $.post(`https://codequotient.com/api/executeCode`,
        {
            code: `${sampleCode}`,
            langId: `${langId}`
        },
        (data, status) => {
            codeID = data.codeId;
            setTimeout(displayData, 8000)
        }
    )

    function displayData() {
        $.get(`https://codequotient.com/api/codeResult/:${codeID}`,
            response => {
                if (Object.entries(response.data).length === 0)
                    $(".output").text("Value not recieved");
                else
                    $(".output").text(response.data.output);
            })
    }
}