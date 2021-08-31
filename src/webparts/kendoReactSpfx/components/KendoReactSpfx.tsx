import * as React from 'react';
import { IKendoReactSpfxProps } from './IKendoReactSpfxProps';
import { IKendoReactSpfxState } from './IKendoReactSpfxState';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';
import '@progress/kendo-theme-default';
import { data } from './bikestations';

const BooleanCell = (props) => {
  return (
    <td>{props.dataItem[props.field] ? '✅' : '❌'}</td>
  )
}

export default class KendoReactSpfx extends React.Component<IKendoReactSpfxProps, IKendoReactSpfxState> {
  constructor(props) {
    super(props);
    this.state = {
      gridData: data,
      dataState: { skip: 0, take: 10 }
    };
  }

  public render(): React.ReactElement<IKendoReactSpfxProps> {
    return (
      <div>
        <Grid data={process(this.state.gridData, this.state.dataState)}
          pageable
          filterable
          sortable
          {...this.state.dataState}
          onDataStateChange={(e) => this.setState({ dataState: e.data })}
        >
          <GridColumn field="station_id" title="ID" />
          <GridColumn field="num_bikes_available" title="Bikes Available" />
          <GridColumn field="num_bikes_disabled" title="Bikes Disabled" />
          <GridColumn field="num_docks_available" title="Docks Available" />
          <GridColumn field="is_charging_station" title="Charging Station" cell={BooleanCell} />
          <GridColumn field="zone" title="Zone" />
        </Grid>
      </div>
    );
  }
}
