import React, { useEffect } from "react";
import { GiDesertSkull } from "react-icons/gi";
import { useParams, useLocation } from "react-router-dom";

const Token = ({user,cor}) => {
    return(
        <div>
            <GiDesertSkull color={cor} size={'50px'} style={styles.img}></GiDesertSkull>
        </div>
    )
}

const styles = {
    container:{
    },
    img:{
    }
}

export default Token