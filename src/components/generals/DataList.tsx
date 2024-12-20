import React from "react";

interface InfoItem {
  label: React.ReactNode;
  value: React.ReactNode;
}

interface props {
  items: InfoItem[];
}

const DataList = ({ items }:props) => {
  return (
    <div className="mt-10 text-white-400">
      {items.map((item, index) => {
        if (!item.value) return
        return (
          <div key={index} className="flex items-center py-3">
            <div className="w-3/12 flex items-center gap-2">
              <div className="bg-neutral-800 rounded-xl flex justify-center items-center text-white-100 text-xs w-4 h-4">i</div>
              {item.label}
              </div>
            <div className="w-9/12 text-white-100 break-words">
              {/* {
                (item.value?.toString().length > 18) ?
                  <ToolTip text={item.value.toString()} />
                : item.value
              } */}
              { item.value }
            </div>
        </div>
        )
      })}
    </div>
  );
};

export default DataList;
