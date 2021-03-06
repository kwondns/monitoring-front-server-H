import { Box } from '@mui/material';
import React from 'react';
import { dashBoardInterface } from 'src/interfaces';
import { LineChartH } from 'src/organisms';
import { PrintH } from 'src/atoms';

function DashBoard(props: dashBoardInterface.dashBoardInterface): JSX.Element {
  const { data, colorMap, domainMap, selectedChart, listChart } = props;
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {listChart.map((key) => {
        const keySplit = key.split('_');
        const color = colorMap[`${keySplit[0]}`];
        const domain = domainMap[`${keySplit[0]}`];
        if (!selectedChart[key]) {
          return null;
        }
        return (
          <Box
            sx={{
              width: { xs: '100vw', sm: '350px' },
              height: '200px',
              border: '1px gray solid',
              borderRadius: '10px',
              m: 1,
            }}
            key={key}
          >
            <PrintH textAlign="center" text={keySplit.join(' ')} />
            <LineChartH data={data} dataKey={key} lineColor={color} domain={domain} />
          </Box>
        );
      })}
    </Box>
  );
}

export default DashBoard;
