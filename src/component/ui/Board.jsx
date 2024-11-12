import { useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  resetServerContext,
} from "react-beautiful-dnd";
import Column from "./Column";

const INITIAL_COLUMN_ORDER = ["column-1", "column-2", "column-3"];

const INITIAL_COL_DATA = {
  "column-1": {
    id: "column-1",
    title: "TODO",
    itemsOrder: ["item-1", "item-2", "item-3"],
  },
  "column-2": {
    id: "column-2",
    title: "In Progress",
    itemsOrder: ["item-4", "item-5"],
  },
  "column-3": {
    id: "column-3",
    title: "Done",
    itemsOrder: ["item-6", "item-7", "item-8"],
  },
};

const ITEMS = {
  "item-1": {
    id: "item-1",
    title: "Item 1",
  },
  "item-2": {
    id: "item-2",
    title: "Item 2",
  },
  "item-3": {
    id: "item-3",
    title: "Item 3",
  },
  "item-4": {
    id: "item-4",
    title: "Item 4",
  },
  "item-5": {
    id: "item-5",
    title: "Item 5",
  },
  "item-6": {
    id: "item-6",
    title: "Item 6",
  },
  "item-7": {
    id: "item-7",
    title: "Item 7",
  },
  "item-8": {
    id: "item-8",
    title: "Item 8",
  },
};

// //add this if using next.js and keep the strict mode to false
// export async function getServerSideProps(context) {
//   resetServerContext();
//   return {
//     props: {},
//   };
// }

export default function Board() {
  const [columnsOrder, setColumnsOrder] = useState(INITIAL_COLUMN_ORDER);
  const [data, setData] = useState(INITIAL_COL_DATA);

  const handleDragDrop = (results) => {
    const { source, destination, type } = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const sourceIndex = source.index;
    const destinationIndex = destination.index;

    if (type === "COLUMN") {
      //dragging the columns
      const reorderedColumns = [...columnsOrder];
      const [removedItem] = reorderedColumns.splice(sourceIndex, 1);
      reorderedColumns.splice(destinationIndex, 0, removedItem);

      setColumnsOrder(reorderedColumns);
      //save the reordered column in database

      return;
    } else {
      //changes within same column
      if (source.droppableId === destination.droppableId) {
        const source_col_id = source.droppableId;
        const new_items_id_collection = [...data[source_col_id].itemsOrder];
        const [deleted_item_id] = new_items_id_collection.splice(
          sourceIndex,
          1
        );
        new_items_id_collection.splice(destinationIndex, 0, deleted_item_id);
        const new_data = { ...data };
        new_data[source_col_id].itemsOrder = new_items_id_collection;
        setData(new_data);

        //update the db
      } else {
        //changes within different col
        const source_col_id = source.droppableId,
          dest_col_id = destination.droppableId;

        const new_source_items_id_collc = [...data[source_col_id].itemsOrder];
        const new_dest_items_id_collc = [...data[dest_col_id].itemsOrder];
        const [deleted_item_id] = new_source_items_id_collc.splice(
          sourceIndex,
          1
        );

        new_dest_items_id_collc.splice(destinationIndex, 0, deleted_item_id);
        const new_data = { ...data };
        new_data[source_col_id].itemsOrder = new_source_items_id_collc;
        new_data[dest_col_id].itemsOrder = new_dest_items_id_collc;

        setData(new_data);

        //update the db
      }
    }
  };

  return (
    <div className="flex h-full w-full items-center  flex-col">
      {/* Set up DragDropContext */}
      <DragDropContext onDragEnd={handleDragDrop}>
        {/* Render Droppable area for columns */}
        <Droppable droppableId="ROOT" type="COLUMN" direction="HORIZONTAL">
          {(provided) => (
            <div
              className="snap-x py-3 justify-around px-6 md:px-0 md:justify-between flex md:flex-row md:w-full gap-3 overflow-scroll max-w-[100vw]  md:overflow-hidden flex-grow min-h-96"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {/* Map through columnsOrder to render each column */}
              {columnsOrder.map((colId, index) => {
                const columnData = data[colId];
                return (
                  <Draggable
                    draggableId={columnData.id}
                    key={columnData.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className="rounded-md border flex flex-col w-full min-w-[80vw] md:min-w-1 shadow-md"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                      >
                        <div
                          {...provided.dragHandleProps}
                          className="flex items-center justify-between w-full gap-2 hover:bg-gray-600 p-4 border-b border-b-gray-700 rounded-t-md"
                        >
                          <p className="text-xl font-bold">
                            {columnData.title}
                          </p>
                        </div>

                        {/* Render items within the column */}
                        <Column {...columnData} ITEMS={ITEMS} />
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}