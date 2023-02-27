// Factorial Function to calculate the factorial of the given number.
function factorial(number) {
    let fact = 1;
    for(; number > 0; number--) {
        fact *= number;
    }
    return fact;
}

// Euclidean Algorithm
function gcd(num1, num2) {
    let x = Math.abs(num1);
    let y = Math.abs(num2);
    while(y) {
        let t = y;
        y = x % y;
        x = t;
    }
    return x;
}

// Geometric Algorithm
function geometric(a, r, n) {
    let series_out = "";
    let temp_a = a;
    if (n > 5) {
        for(let b = 0; b < 5; b++) {
            if (b < n-1) {
                series_out += `${temp_a}, `
            } else {
                series_out += `${temp_a}`
            }
            temp_a *= r;
        }
        series_out += "..."
    } else  {
        for(let b = 0; b < n; b++) {
            if (b < n-1) {
                series_out += `${temp_a}, `
            } else {
                series_out += `${temp_a}`
            }
            temp_a *= r;
        }
    }
    return [a * Math.pow(r, n-1), series_out]
}

// Arithmetic Sequence
function arithmetic(a, d, n) {
    let series_out = "";
    let temp_a = a;
    if (n > 5) {
        for(let b = 0; b < 5; b++) {
            if (b < n-1) {
                series_out += `${temp_a}, `
            } else {
                series_out += `${temp_a}`
            }
            temp_a += d;
        }
        series_out += "..."
    } else  {
        for(let b = 0; b < n; b++) {
            if (b < n-1) {
                series_out += `${temp_a}, `
            } else {
                series_out += `${temp_a}`
            }
            temp_a += d;
        }
    }
    return [ a + (n-1)*d, series_out]
}

// Closes all the windows
function closeAll() {
    let topic_windows = [
        $('#main-page'), $('#window1'), $('#window2'), $('#window3'), $('#window4'), $('#window5'),
        $('#window6'), $('#window7'), $('#window8'), $('#window9'), $('#window10'),
        $('#window11'), $('#window12'), $('#window13'), $('#window14'), $('#window15')
    ];

    for(let topic_window of topic_windows) {
        topic_window.css('display', 'none');
    }
}

$(document).ready(function() {
    // List of topic elements
    let topic_elements = [
        $('#topic1'), $('#topic2'), $('#topic3'), $('#topic4'), $('#topic5'),
        $('#topic6'), $('#topic7'), $('#topic8'), $('#topic9'), $('#topic10'),
        $('#topic11'), $('#topic12'), $('#topic13'), $('#topic14'), $('#topic15') 
    ];

    // List of window elements
    let window_elements = [
        $('#window1'), $('#window2'), $('#window3'), $('#window4'), $('#window5'),
        $('#window6'), $('#window7'), $('#window8'), $('#window9'), $('#window10'),
        $('#window11'), $('#window12'), $('#window13'), $('#window14'), $('#window15')
    ]; 
    
    // Assigns a click listener to every topic element
    for(let i = 0; i < topic_elements.length; i++) {
        topic_elements[i].click(() => {
            closeAll();
            window_elements[i].css("display", "block");

        });
    }

    $('#homepage').click(()=> {
        closeAll();
        $('#main-page').css("display", "block");
    })

    // Factorial Calculate Event
    $('#factorial-c').click(() => {
        $('#factorial-o').val(factorial($('#factorial-i').val()));
    });

    // Euclidean Calculate Event
    $('#euclidean-c').click(() => {
        $('#euclidean-o').val(gcd(Number($('#euclidean-i').val()), Number($('#euclidean1-i').val())));
    });

    // Geometric Calculate Event
    $('#geometric-c').click(() => {
        let [nth, series] = geometric(Number($('#geometric-a').val()), Number($('#geometric-r').val()), Number($("#geometric-n").val()));
        $('#nth-text').text(nth);
        $('#g-series').text(series);
    });
    // Arithmetic Calculate Event
    $('#arithmetic-c').click(() => {
        let [nth, series] = arithmetic(Number($('#arithmetic-a').val()), Number($('#arithmetic-r').val()), Number($("#arithmetic-n").val()));
        $('#anth-text').text(nth);
        $('#a-series').text(series);
    });
});