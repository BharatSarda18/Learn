import React, { useEffect, useId, useState } from 'react';

export default function UseId() {

    const [id, setId] = useState(useId());
    const newID = useId();
    console.log(id, "id");
    useEffect(() => {

        setId(newID);
    }, [id])
    return (

        <div>
            {id}
        </div>
    );
}