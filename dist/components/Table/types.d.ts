/// <reference types="react" />
export declare type ColumnType<T> = {
    name: string;
    label?: string;
    hidden?: boolean;
    sort?: ((a: RowType<T>, b: RowType<T>) => number) | undefined;
    render?: ({ value, row }: {
        value: any;
        row: T;
    }) => React.ReactNode;
    headerRender?: HeaderRenderType;
};
export declare type ColumnStateType<T> = {
    name: string;
    label: string;
    hidden: boolean;
    sort?: ((a: RowType<T>, b: RowType<T>) => number) | undefined;
    sorted: {
        on: boolean;
        asc?: boolean;
    };
    headerRender?: HeaderRenderType;
};
export declare type HeaderRenderType = ({ label }: {
    label: React.ReactNode;
}) => React.ReactNode;
export declare type HeaderType<T> = {
    name: string;
    label?: string;
    hidden?: boolean;
    sorted: {
        on: boolean;
        asc?: boolean;
    };
    sort?: ((a: RowType<T>, b: RowType<T>) => number) | undefined;
    render: () => React.ReactNode;
};
export declare type DataType = {
    [key: string]: any;
};
export declare type ColumnByNamesType<T> = {
    [key: string]: ColumnType<T>;
};
export declare type RenderFunctionType<T> = ({ value, row }: RenderFunctionArgsType<T>) => React.ReactNode | undefined;
declare type RenderFunctionArgsType<T> = {
    value: any;
    row: T;
};
export declare type ColumnByNameType<T> = Omit<Required<ColumnType<T>>, "name" | "sort">;
export interface RowType<T extends DataType> {
    id: number;
    cells: CellType[];
    hidden?: boolean;
    selected?: boolean;
    original: T;
}
export declare type CellType = {
    value: any;
    render: () => React.ReactNode;
};
export interface UseTableTypeParams<T extends DataType> {
    columns: ColumnType<T>[];
    data: T[];
    options?: {
        sortable?: boolean;
        selectable?: boolean;
        filter?: (row: RowType<T>[]) => RowType<T>[];
        filterOn?: boolean;
    };
}
export interface UseTablePropsType<T> {
    columns: ColumnType<T>[];
    data: T[];
    options?: {
        sortable?: boolean;
        selectable?: boolean;
        filter?: (row: RowType<T>[]) => RowType<T>[];
    };
}
export interface UseTableOptionsType<T> {
    sortable?: boolean;
    selectable?: boolean;
    pagination?: boolean;
    filter?: (row: RowType<T>[]) => RowType<T>[];
}
export interface UseTableReturnType<T> {
    headers: HeaderType<T>[];
    originalRows: RowType<T>[];
    rows: RowType<T>[];
    selectedRows: RowType<T>[];
    dispatch: React.Dispatch<TableAction<T>>;
    toggleSort: (columnName: string, isAscOverride?: boolean) => void;
    selectRow: (id: number) => void;
    toggleAll: () => void;
    setSearchString: (searchString: string) => void;
    toggleAllState: boolean;
    pagination: PaginatorType;
}
declare type PaginatorType = {
    nextPage: () => void;
    prevPage: () => void;
    page: number;
    perPage: number;
    canNext: boolean;
    canPrev: boolean;
};
export declare type TableState<T extends DataType> = {
    columnsByName: ColumnByNamesType<T>;
    columns: ColumnStateType<T>[];
    rows: RowType<T>[];
    originalRows: RowType<T>[];
    selectedRows: RowType<T>[];
    filterOn: boolean;
    sortColumn: string | null;
    toggleAllState: boolean;
    pagination: PaginatorType;
    paginationEnabled: boolean;
};
export declare type TableAction<T extends DataType> = {
    type: "TOGGLE_SORT";
    columnName: string;
    isAscOverride?: boolean;
} | {
    type: "SELECT_ROW";
    rowId: number;
} | {
    type: "GLOBAL_FILTER";
    filter: (row: RowType<T>[]) => RowType<T>[];
} | {
    type: "SEARCH_STRING";
    searchString: string;
} | {
    type: "GLOBAL_FILTER_OFF";
} | {
    type: "SET_ROWS";
    data: RowType<T>[];
} | {
    type: "NEXT_PAGE";
} | {
    type: "PREV_PAGE";
} | {
    type: "TOGGLE_ALL";
};
export interface TableRowProps {
    textAlign?: "left" | "center" | "right";
}
export interface TableHeadProps {
    width?: string | number;
}
export interface TableBodyProps {
    borderRadius?: number;
}
export {};
