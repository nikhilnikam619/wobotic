import "./TableData.css"

function TableData({ data }) {
  return (
    <table className="camera-table">
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>NAME</th>
          <th>LOCATION</th>
          <th>RECORDER</th>
          <th>STATUS</th>
        </tr>
      </thead>

      <tbody>
        {data.map((camera) => (
          <tr key={camera.id}>
            <td>
              <input type="checkbox" />
            </td>

            <td>
              <div className="camera-name">
                <span
                  className={`dot ${
                    camera.status === "active"
                      ? "green"
                      : camera.status === "inactive"
                      ? "gray"
                      : "orange"
                  }`}
                ></span>
                {camera.name}
              </div>
            </td>

            <td>{camera.location}</td>

            <td>{camera.model || "N/A"}</td>

            <td>
              <span
                className={`status-badge ${
                  camera.status === "active"
                    ? "active"
                    : camera.status === "inactive"
                    ? "inactive"
                    : "maintenance"
                }`}
              >
                {camera.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableData;
