  $(document).ready(function() {

    // WEBSITE PUBLISHER CONFIGURATION
    let websiteOwnerAddress = "YEZPYADNYFRKZAJGBKIHYAZDXTDZVWPCQNSYMTLKRXCVTHURTVRFQZHAXTHMGOMCKLHXOYGASTNEJMZELNPFZ9MMKN"; // receive address (not wallet seed!)
    let suggestedMicroPayment = "500"; // in iotas (not Miotas)
    
    // set a detection flag
    let adBlockFlag = false;    

    // check using div insert method
    let testAd = document.createElement('div');
    testAd.innerHTML = '&nbsp;';
    testAd.className = 'adsbox';
    document.body.appendChild(testAd);
    window.setTimeout(function() {
        if (testAd.offsetHeight === 0) {
            adBlockFlag = true;
        }
        testAd.remove();        
    }, 100);

    // handle messaging if blocker detected
    if (adBlockFlag) {

        showIota();

    } else {

        // if still not detected, check using ajax method   
        $.ajax({
            url: "/src/advertisement.js", // this is just an empty js file
            dataType: "script",
            success: function () {
                // do nothing, adBlock not detected
            }
        })
        .fail(function () {
            // handle popup messaging if blocker detected
            showIota();
        });

    }
    
    function showIota() {        
        $("body").overhang({
            type: "info",
            html: true,
            message: "Ad blocking detected.<br>Instead of showing ads, please send a micropayment of " + suggestedMicroPayment + " IOTA (<$0.001) to ADDRESS:<br>" + websiteOwnerAddress + "<br><a style='color:black;text-transform:none' href='http://iotasupport.com/whatisiota.shtml'>What is IOTA?</a>",
            duration: 25,
            upper: true
        });
    }

  });
