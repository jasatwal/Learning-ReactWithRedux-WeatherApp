import _ from "lodash";
import React, { Component } from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

const average = (data) => {
    return _.round(_.sum(data)/data.length);
}

export default ({ data, colour, units }) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={data}>
                <SparklinesLine color={colour} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(data)} {units}</div>
        </div>
    );
}