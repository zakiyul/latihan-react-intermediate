import React from "react";

const App = () => {
  const initState = [
    { id: 2, name: "zakiul fikri", nim: "1901010120" },
    { id: 3, name: "takiya genji", nim: "1901010121" },
    { id: 1, name: "uciha itachi", nim: "1901010122" },
    { id: 4, name: "sakata gintoki", nim: "1901010123" },
  ];
  const [sortId, setSortId] = React.useState(true);
  const [sortName, setSortName] = React.useState(true);
  const [mhs, setMhs] = React.useState(initState);

  const sortById = () => {
    if (sortId) {
      setSortId(!sortId);
      setMhs(
        initState.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0))
      );
    } else {
      setSortId(!sortId);
      setMhs(
        initState.sort((a, b) => (a.id > b.id ? -1 : b.id > a.id ? 1 : 0))
      );
    }
  };
  const sortByName = () => {
    if (sortName) {
      setMhs(
        initState.sort(function (a, b) {
          return ("" + a.name).localeCompare(b.name);
        })
      );
      setSortName(!sortName);
    } else {
      setMhs(
        initState.sort(function (a, b) {
          return ("" + b.name).localeCompare(a.name);
        })
      );
      setSortName(!sortName);
    }
  };
  const TbodyComp = ({ item }) => {
    return (
      <tbody>
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.nim}</td>
        </tr>
      </tbody>
    );
  };
  return (
    <div className="uk-container">
      <div className="uk-card uk-card-body">
        <table className="uk-table uk-table-divider">
          <caption>Data Mahasiswa</caption>
          <thead>
            <tr>
              <th onClick={sortById} className="eki-table-heading">
                Id
              </th>
              <th onClick={sortByName} className="eki-table-heading">
                Name
              </th>
              <th className="eki-table-heading">Table Heading</th>
            </tr>
          </thead>
          {mhs && mhs.map((item) => <TbodyComp key={item.id} item={item} />)}
        </table>
      </div>
    </div>
  );
};

export default App;
