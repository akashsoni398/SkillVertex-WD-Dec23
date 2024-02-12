import React from "react";
import ExpenseItem from "./expenseItem";

function ExpenseSection() {

    let item = [
        {
            itemname: "Soap",
            cost:"$23",
            category:"Home essentials",
            datetime:"2023-12-01 12:34PM"
        },
        {
            itemname: "Soap2",
            cost:"$35",
            category:"Home essentials",
            datetime:"2023-12-11 12:34PM"
        }
    ]
    return(
        <div>
            <ExpenseItem item={item} />
        </div>
    )
}

export default ExpenseSection;

