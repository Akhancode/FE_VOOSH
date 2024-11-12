import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";

const Column = ({ itemsOrder, id, ITEMS }) => {
    return (
        <Droppable droppableId={id}>
            {(provided) => (
                <div
                    {...provided?.draggableProps}
                    ref={provided?.innerRef}
                    className="flex flex-col w-full min-h-60 h-fit gap-3 mt-2 p-4 text-sm"
                >
                    {itemsOrder?.map((item_id, index) => {
                        const item = ITEMS[item_id];

                        return (
                          <TaskCard item={item} index={index}/>
                        );
                    })}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default Column;