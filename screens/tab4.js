import React from "react";
import {Container, Content, Icon, Right, Text, Card, CardItem } from "native-base";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
// import { Col, Row, Grid } from 'react-native-easy-grid';
import {StyleSheet, View, TouchableOpacity, Alert} from 'react-native';

export default class Tab4 extends React.Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;

        const elementButton = (value) => (
            <TouchableOpacity onPress={() => this._alertIndex(value)}>

                <View>
                    <Text style={styles.btnText}>{value}</Text>
                </View>
            </TouchableOpacity>
        );

        this.state = {
            tableTitle: ['DDC 4260\nWPL 4260', 'BNN 3055', 'WNU 8170', 'WC 1635 R', 'WVG 3848', 'WST 1209'],
            tableHead: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            tableData2: [
                ['1','1','1','1','1','1','1','1','1','1','1','1'],
                ['1','1','1','1','1','1','1','1','1','1','1','1'],
                ['-','-','-','-','-','-','-','-','-','-','-','-'],
                ['1','-','-','-','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','-'],
                ['-','-','-','-','-','-','-','-','-','-','-','-']
            ]
        }
    }

    _alertIndex(value) {
        Alert.alert(`This is column ${value}`);
    }

    render() {
    const state = this.state;
    return(
        <Container>
            <Content padder>

                <Card>
                    <CardItem header bordered>
                        <Text>Penyewa</Text>
                    </CardItem>
                    <CardItem button>
                        <Icon active type="FontAwesome" name="car" />
                        <Text>WNU 8170 (Myvi)</Text>
                    </CardItem>

                    <CardItem button>
                        <Icon active type="FontAwesome" name="car" />
                        <Text>DDC 4260 / WPL 4260 (Honda)</Text>
                    </CardItem>

                    <CardItem button>
                        <Icon active type="FontAwesome" name="car" />
                        <Text>BNN 3055 (Honda Accord)</Text>
                    </CardItem>

                    <CardItem button>
                        <Icon active type="FontAwesome" name="car" />
                        <Text>WST 1209 (X-Trail)</Text>
                    </CardItem>

                    <CardItem button>
                        <Icon active type="FontAwesome" name="car" />
                        <Text>WVG 3848 (Van)</Text>
                    </CardItem>

                    <CardItem button>
                        <Icon active type="FontAwesome" name="car" />
                        <Text>WC 1635 R (Kia)</Text>
                    </CardItem>
                </Card>

                <Card>
                    <CardItem header bordered>
                        <Text>Status</Text>
                    </CardItem>

                    <CardItem>

                        <View style={styles.container}>
                            <Table style={{flexDirection: 'row'}}>
                                {/* Left Wrapper */}
                                <TableWrapper style={{width: 80}}>
                                    <Cell data="Plate" style={styles.singleHead}/>
                                    <TableWrapper style={{flexDirection: 'row'}}>
                                        <Col data={state.tableTitle} style={styles.title} textStyle={styles.titleText}></Col>
                                    </TableWrapper>
                                </TableWrapper>

                                {/* Right Wrapper */}
                                <TableWrapper style={{flex:1}}>
                                    <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                                    {
                                        state.tableData2.map((rowData, index) => (
                                            <Row
                                                key={index}
                                                data={rowData}
                                                style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                                                textStyle={styles.text}
                                            />
                                        ))
                                    }
                                    {/*{*/}
                                        {/*state.tableData2.map((rowData, index) => (*/}
                                            {/*<TableWrapper key={index} style={styles.row}>*/}
                                                {/*{*/}
                                                    {/*rowData.map((cellData, cellIndex) => (*/}
                                                        {/*<Cell key={cellIndex} data={cellData} textStyle={styles.text}/>*/}
                                                    {/*))*/}
                                                {/*}*/}
                                            {/*</TableWrapper>*/}
                                        {/*))*/}
                                    {/*}*/}
                                </TableWrapper>
                                {/*<TableWrapper style={{flex:1}}>*/}
                                    {/*<Cell data={state.tableData2} heightArr={[40, 30, 30, 30, 30]} textStyle={styles.text}/>*/}
                                {/*</TableWrapper>*/}
                            </Table>
                        </View>

                        {/*<View style={styles.container}>*/}

                            {/*<Table borderStyle={{borderColor: 'transparent'}}>*/}
                                {/*<Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>*/}
                                {/*{*/}
                                    {/*state.tableData2.map((rowData, index) => (*/}
                                        {/*<TableWrapper key={index} style={styles.row}>*/}
                                            {/*{*/}
                                                {/*rowData.map((cellData, cellIndex) => (*/}
                                                    {/*<Cell key={cellIndex} data={cellData} widthArr={[150,50,50,50,50,50,50,50,50,50,50,50,50]} textStyle={styles.text}/>*/}
                                                {/*))*/}
                                            {/*}*/}
                                        {/*</TableWrapper>*/}
                                    {/*))*/}
                                {/*}*/}
                            {/*</Table>*/}
                        {/*</View>*/}

                    </CardItem>

                </Card>

            </Content>
        </Container>
    )
  }
}

const styles = StyleSheet.create({
    // mainContainer: { flexDirection: 'row'},
    // container: { flex: 1, padding: 0, paddingTop: 30, backgroundColor: '#fff' },
    // head: { height: 40, backgroundColor: '#808B97' },
    // text: { margin: 6 },
    // row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
    // btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
    // btnText: { textAlign: 'center', color: '#fff' },

    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    singleHead: { width: 80, backgroundColor: '#c8e1ff', alignItems: 'center' },
    head: { flex: 1, backgroundColor: '#c8e1ff' },
    title: { flex: 2, backgroundColor: '#f6f8fa' },
    titleText: { marginRight: 6, textAlign:'right' },
    text: { textAlign: 'center' },
    btn: { width: 58, height: 18, marginLeft: 15, backgroundColor: '#c8e1ff', borderRadius: 2 },
    btnText: { textAlign: 'center' },
    row: {}
});