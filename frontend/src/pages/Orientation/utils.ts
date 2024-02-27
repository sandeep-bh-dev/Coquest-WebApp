const NUMPAGES = 5;

function sanitizePage(page: number) {    
    if(page <= 1) {
        return 1;
    } else if(page > NUMPAGES) {
        return NUMPAGES;
    } else {
        return page
    }
}

export default sanitizePage;
