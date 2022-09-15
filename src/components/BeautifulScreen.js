import React from 'react';

function BeautifulScreen ({nombre1,operator,nombre2}) {

    return(
        <div className="Ecran">
             { nombre1 } { operator } { nombre2 }
        </div>
    )
}

export default BeautifulScreen;