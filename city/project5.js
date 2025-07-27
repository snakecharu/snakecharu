function city(){
    let city=document.getElementById("my-select").value;

    let Population=0,LiteracyRate=0,MajorLanguage="Tamil";
    
    switch(city){
        case 'Tamilnadu':
            Population=82;
            LiteracyRate=82.9;
            MajorLanguage="Tamil";
            break;
        case 'Maharashtra':
            Population=126;
            LiteracyRate=82.3;
            MajorLanguage="Marathi";
            break;
        case 'Uttar Pradesh':
            Population=248;
            LiteracyRate=73.0;
            MajorLanguage="Hindi,Urdu";
            break;
        case 'Bihar':
            Population=130;
            LiteracyRate=70.9;
            MajorLanguage="Hindi,Maithili,Bhojpuri";
            break;
        case 'West Bengal':
            Population=101;
            LiteracyRate=77.1;
            MajorLanguage="Bengali";
            break;
        case 'Rajasthan':
            Population=84;
            LiteracyRate=69.7;
            MajorLanguage="Hindi,Rajasthani,dialects";
            break;
        case 'Gujarat':
            Population=72;
            LiteracyRate=82.4;
            MajorLanguage="Gujarati";
            break;
        case 'Andhra Pradesh':
            Population=55;
            LiteracyRate=67.4;
            MajorLanguage="Telugu";
            break;
        case 'Karnataga':
            Population=70;
            LiteracyRate=75.36;
            MajorLanguage="Kannada";
            break;
        case 'Kerala':
            Population=36;
            LiteracyRate=96.2;
            MajorLanguage="Malayalam";
            break;

    }
    const result=document.getElementById("result");
    result.innerHTML=`Population:${Population} Literacy Rate:${LiteracyRate} Language:${MajorLanguage}`;
}