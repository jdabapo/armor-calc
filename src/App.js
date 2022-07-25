import { useState } from 'react';
import { AppShell, Navbar, Header, Select, MantineProvider, NumberInput, Paper, Slider, Grid} from '@mantine/core';
import { resistance_calcuation } from './calculations.js';

const themeProvider = {colorScheme: 'light'}
const list_marks = [];
const champs = [];
for(var i = 0; i < 20;i++){
  const tmp = i * 50;
  let mark = {value:tmp,label:tmp.toString()}
  list_marks.push(mark);
}
function App() {
  const [CurrentNumber,setCurrentNumber] = useState(0);
  return (
    <MantineProvider
    theme={themeProvider}
    >
      <AppShell
        padding="md"
        navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{/* Navbar content */}</Navbar>}
        header={<Header height={60} p="xs">{/* Header content */<p>jff</p>}</Header>}
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1] },
        })}
        >
          <Paper shadow="xs" radius="xs" p="xl">
          <Slider
            labelTransition="fade"
            labelTransitionDuration={200}
            labelTransitionTimingFunction="ease"
            min={0}
            max={1000} 
            value={CurrentNumber} onChange={setCurrentNumber}
            marks={list_marks}
          />
          <br></br>
          <NumberInput 
            value={CurrentNumber} 
            onChange={(CurrentNumber) => setCurrentNumber(CurrentNumber)}>
          </NumberInput>
            You will take {Math.round((resistance_calcuation(CurrentNumber)*100))}% Damage from attacks
          </Paper>
          <br></br>
          <Paper shadow="xs" radius="xs" p="xl">
            <Grid grow>
              <Grid.Col span={4}>
                <Select
                  label="Your favorite framework/library"
                  placeholder="Pick one"
                  searchable
                  nothingFound="No options"
                  data={['React', 'Angular', 'Svelte', 'Vue']}
                >
                  
                </Select>
              </Grid.Col>

            </Grid>
          </Paper>
      <br></br>
      
      </AppShell>
    </MantineProvider>
  );
}

export default App;
