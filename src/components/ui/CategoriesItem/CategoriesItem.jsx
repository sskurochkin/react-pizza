import React from 'react';

function CategoriesItem({ name, ...children}) {
    return (
        <li {...children}>{name}</li>
    );
}

export default CategoriesItem;