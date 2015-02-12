var blueberries = {
    fullName: "Vaccinium Corymbosum",
    growsOnShrub: "True",
    energy: 240,
    carbohydrates: 14.49,
    protein: 0.74    
};

var grapes = {
    fullName: "Vitis Vinifera",
    growsOnShrub: "False",
    energy: 288,
    carbohydrates: 18.1,
    protein: 0.72    
};

var redcurrant = {
    fullName: "Ribes Rubrum",
    growsOnShrub: "True",
    energy: 234,
    carbohydrates: 13.8,
    protein: 1.4    
};

var writeBerry = function (berry) {
    document.write("<h1>" + berry.fullName + "</h1>");
    
    document.write("<dl>");
        document.write("<dt>Grows on Shrubs</dt>")
        document.write("<dd>" + berry.growsOnShrub + "</dd>");



        document.write("<dt>Energy</dt>")
        document.write("<dd>" + berry.energy + "</dd>");



        document.write("<dt>Carbohydrates</dt>")
        document.write("<dd>" + berry.carbohydrates + "</dd>");



        document.write("<dt>Protein</dt>")
        document.write("<dd>" + berry.protein + "</dd>");
    document.write("</dl>");
}

var allBerry = [blueberries, grapes, redcurrant]

allBerry.forEach(writeBerry);

//writeBerry(blueberries);
//writeBerry(grapes);
//writeBerry(redcurrant);