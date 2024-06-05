/* eslint-disable react/display-name */
import React, { useMemo } from 'react'
import { useTable, useRowSelect, useSortBy, useGlobalFilter, usePagination, Column } from 'react-table'
import Card from '@/components/ui/Card'
import Icon from '@/components/ui/Icon'
import Tooltip from '@/components/ui/Tooltip'
import GlobalFilter from './GlobalFilter'
import { advancedTable } from '@/constant/table-data'

interface Customer {
  image: string
  name: string
}

interface RowData {
  id: string
  order: string
  customer: Customer
  date: string
  quantity: number
  amount: number
  status: 'paid' | 'due' | 'cancled'
  action: any
}

const COLUMNS: Column<RowData>[] = [
  {
    Header: 'Id',
    accessor: 'id',
    Cell: ({ cell }) => <span>{cell.value}</span>,
  },
  {
    Header: 'Order',
    accessor: 'order',
    Cell: ({ cell }) => <span>#{cell.value}</span>,
  },
  {
    Header: 'Customer',
    accessor: 'customer',
    Cell: ({ cell }) => (
      <div>
        <span className='inline-flex items-center'>
          <span className='h-7 w-7 flex-none rounded-full bg-slate-600 ltr:mr-3 rtl:ml-3'>
            <img src={cell.value.image} alt='' className='h-full w-full rounded-full object-cover' />
          </span>
          <span className='text-sm capitalize text-slate-600 dark:text-slate-300'>{cell.value.name}</span>
        </span>
      </div>
    ),
  },
  {
    Header: 'Date',
    accessor: 'date',
    Cell: ({ cell }) => <span>{cell.value}</span>,
  },
  {
    Header: 'Quantity',
    accessor: 'quantity',
    Cell: ({ cell }) => <span>{cell.value}</span>,
  },
  {
    Header: 'Amount',
    accessor: 'amount',
    Cell: ({ cell }) => <span>{cell.value}</span>,
  },
  {
    Header: 'Status',
    accessor: 'status',
    Cell: ({ cell }) => (
      <span className='block w-full'>
        <span
          className={`mx-auto inline-block min-w-[90px] rounded-[999px] bg-opacity-25 px-3 py-1 text-center ${
            cell.value === 'paid' ? 'bg-success-500 text-success-500' : ''
          } ${cell.value === 'due' ? 'bg-warning-500 text-warning-500' : ''} ${
            cell.value === 'cancled' ? 'bg-danger-500 text-danger-500' : ''
          }`}
        >
          {cell.value}
        </span>
      </span>
    ),
  },
  {
    Header: 'Action',
    accessor: 'action',
    Cell: () => (
      <div className='flex space-x-3 rtl:space-x-reverse'>
        <Tooltip content='View' placement='top' arrow animation='shift-away'>
          <button className='action-btn' type='button'>
            <Icon icon='heroicons:eye' />
          </button>
        </Tooltip>
        <Tooltip content='Edit' placement='top' arrow animation='shift-away'>
          <button className='action-btn' type='button'>
            <Icon icon='heroicons:pencil-square' />
          </button>
        </Tooltip>
        <Tooltip content='Delete' placement='top' arrow animation='shift-away' theme='danger'>
          <button className='action-btn' type='button'>
            <Icon icon='heroicons:trash' />
          </button>
        </Tooltip>
      </div>
    ),
  },
]

interface IndeterminateCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  indeterminate?: boolean
}

const IndeterminateCheckbox = React.forwardRef<HTMLInputElement, IndeterminateCheckboxProps>(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef<HTMLInputElement>(null)
    const resolvedRef: any = ref || defaultRef

    React.useEffect(() => {
      if (resolvedRef && resolvedRef.current) {
        resolvedRef.current.indeterminate = indeterminate ?? false
      }
    }, [resolvedRef, indeterminate])

    return <input type='checkbox' ref={resolvedRef} {...rest} className='table-checkbox' />
  }
)

interface TableOneProps {
  title?: string
}

const TableOne: React.FC<TableOneProps> = ({ title = 'Advanced Table Two' }) => {
  const columns: any = useMemo(() => COLUMNS, [])
  const data = useMemo(() => advancedTable, [])

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }: any) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row }: any) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    setGlobalFilter,
    prepareRow,
  }: any = tableInstance

  const { globalFilter, pageIndex, pageSize } = state

  return (
    <>
      <Card>
        <div className='mb-6 items-center justify-between md:flex'>
          <h4 className='card-title'>{title}</h4>
          <div>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          </div>
        </div>
        <div className='-mx-6 overflow-x-auto'>
          <div className='inline-block min-w-full align-middle'>
            <div className='overflow-hidden'>
              <table className='min-w-full table-fixed divide-y divide-slate-100 dark:divide-slate-700' {...getTableProps()}>
                <thead className='bg-slate-200 dark:bg-slate-700'>
                  {headerGroups.map((headerGroup: any) => {
                    const { key, ...restHeaderGroupProps } = headerGroup.getHeaderGroupProps()
                    return (
                      <tr key={key} {...restHeaderGroupProps}>
                        {headerGroup.headers.map((column: any) => {
                          const { key, ...restColumnProps } = column.getHeaderProps()
                          return (
                            <th key={key} {...restColumnProps} scope='col' className='table-th'>
                              {column.render('Header')}
                              <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                            </th>
                          )
                        })}
                      </tr>
                    )
                  })}
                </thead>
                <tbody
                  className='divide-y divide-slate-100 bg-white dark:divide-slate-700 dark:bg-slate-800'
                  {...getTableBodyProps()}
                >
                  {page.map((row: any) => {
                    prepareRow(row)
                    const { key, ...restRowProps } = row.getRowProps()
                    return (
                      <tr key={key} {...restRowProps}>
                        {row.cells.map((cell: any) => {
                          const { key, ...restCellProps } = cell.getCellProps()
                          return (
                            <td key={key} {...restCellProps} className='table-td'>
                              {cell.render('Cell')}
                            </td>
                          )
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='mt-6 items-center justify-between space-y-5 md:flex md:space-y-0'>
          <div className='flex items-center space-x-3 rtl:space-x-reverse'>
            <select className='form-control w-max py-2' value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
              {[10, 25, 50].map((size) => (
                <option key={size} value={size}>
                  Show {size}
                </option>
              ))}
            </select>
            <span className='text-sm font-medium text-slate-600 dark:text-slate-300'>
              Page{' '}
              <span>
                {pageIndex + 1} of {pageOptions.length}
              </span>
            </span>
          </div>
          <ul className='flex flex-wrap items-center space-x-3 rtl:space-x-reverse'>
            <li className='text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180'>
              <button
                className={`${!canPreviousPage ? 'cursor-not-allowed opacity-50' : ''}`}
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <Icon icon='heroicons:chevron-double-left-solid' />
              </button>
            </li>
            <li className='text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180'>
              <button
                className={`${!canPreviousPage ? 'cursor-not-allowed opacity-50' : ''}`}
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                Prev
              </button>
            </li>
            {pageOptions.map((page: any, pageIdx: any) => (
              <li key={pageIdx}>
                <button
                  aria-current='page'
                  className={`${
                    pageIdx === pageIndex
                      ? 'bg-slate-900 font-medium text-white dark:bg-slate-600 dark:text-slate-200'
                      : 'bg-slate-100 font-normal text-slate-900 dark:bg-slate-700 dark:text-slate-400'
                  } flex h-6 w-6 items-center justify-center rounded text-sm leading-[16px] transition-all duration-150`}
                  onClick={() => gotoPage(pageIdx)}
                >
                  {page + 1}
                </button>
              </li>
            ))}
            <li className='text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180'>
              <button
                className={`${!canNextPage ? 'cursor-not-allowed opacity-50' : ''}`}
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                Next
              </button>
            </li>
            <li className='text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180'>
              <button
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
                className={`${!canNextPage ? 'cursor-not-allowed opacity-50' : ''}`}
              >
                <Icon icon='heroicons:chevron-double-right-solid' />
              </button>
            </li>
          </ul>
        </div>
      </Card>
    </>
  )
}

export default TableOne
