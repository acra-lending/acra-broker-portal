import DataTable from 'react-data-table-component';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
// import 'rsuite-table/lib/less/index.less'; 
import { useState } from 'react';
const columns = [
    {
        name: 'Summary',
        selector: row => row.summary,
        sortable: true
    },
    {
        name: 'Publish Date',
        selector: row => row.publishDate,
        sortable: true
    },
    {
        name: 'Announcement',
        selector: row => row.announcement,
        sortable: true
    },
    {
        name: 'Number',
        selector: row => row.number,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]

function Announcements({ menuItems, announcementsItems }) {
    console.log(announcementsItems)
    var outPut = [];

        for (let i = 0; i < announcementsItems.data.length; i++) {
            outPut.push(announcementsItems.data[i].attributes)
        }
    console.log(outPut);
    const [sortColumn, setSortColumn] = useState('id');
  const [sortType, setSortType] = useState('asc');
  const [loading, setLoading] = useState(false);

  const sortData = () => {
    if (sortColumn && sortType) {
      return data.sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];
        if (typeof x === 'string') {
          x = x.charCodeAt();
        }
        if (typeof y === 'string') {
          y = y.charCodeAt();
        }
        if (sortType === 'asc') {
          return x - y;
        } else {
          return y - x;
        }
      });
    }
    return data;
  };

  const handleSortColumn = (sortColumn, sortType) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSortColumn(sortColumn);
      setSortType(sortType);
    }, 500);
  };

  return (
    <Table
      height={400}
      data={sortData()}
      sortColumn={sortColumn}
      sortType={sortType}
      onSortColumn={handleSortColumn}
      loading={loading}
      onRowClick={data => {
        console.log(data);
      }}
    >
      <Column width={70} align="center" fixed sortable>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={130} fixed sortable>
        <HeaderCell
          renderSortIcon={sortType => {
            console.log(sortType);

            if (sortType === 'asc') {
              return 1;
            } else if (sortType === 'desc') {
              return 2;
            }

            return 3;
          }}
        >
          First Name
        </HeaderCell>
        <Cell dataKey="firstName" />
      </Column>
      <Column width={130} sortable>
        <HeaderCell>Last Name</HeaderCell>
        <Cell dataKey="lastName" />
      </Column>

      <Column width={200} sortable>
        <HeaderCell>City</HeaderCell>
        <Cell dataKey="city" />
      </Column>

      <Column width={200} sortable>
        <HeaderCell>Street</HeaderCell>
        <Cell dataKey="street" />
      </Column>

      <Column width={200} sortable>
        <HeaderCell>Company</HeaderCell>
        <Cell dataKey="company" />
      </Column>

      <Column width={200}>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>
    </Table>
    );
};

export async function getServerSideProps() {
    const [menuResponse, announcementsResponse] = await Promise.all([
      fetch(`${process.env.BASE_URL}/corr-portal-menu-items`),
      fetch(`${process.env.BASE_URL}/corr-portal-annoucements`)
    ]); 
  
      const [menuItems, announcementsItems] = await Promise.all([
        menuResponse.json(),
        announcementsResponse.json()
      ]);
      
      return { props: { menuItems, announcementsItems } };
}

export default Announcements;