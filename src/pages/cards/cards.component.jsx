import React,{useEffect,useRef} from 'react';
import { connect } from 'react-redux';

import { fetchSpaceXAPIStart } from '../../redux/space-x/space-x.actions';

import Card from '../../components/card/card.component';
import Loader from '../../components/loader/loader.component';
import './cards.styles.css';

const Cards = ({fetchSpaceXAPIStart,spaceXdata,isLoading}) => {

    const loadApiData = useRef();
    loadApiData.current = () => fetchSpaceXAPIStart();

    useEffect(()=>{
        //fetchSpaceXAPIStart();
        loadApiData.current();
    },[]);
    return (
        isLoading ?
            <Loader/>:
            (
                spaceXdata.length?
                (<div className="cards-container">
                    {
                        spaceXdata.map(data => <Card key={data.flight_number} mission={data}/>)
                    }
                </div>):
                <div className="no-data">No Data Found</div>
            )
    );
}

const mapStateToProps = ({spaceXData}) => ({
    spaceXdata: spaceXData.spaceXdata,
    isLoading: spaceXData.isLoading
});

const mapDispatchToProps = dispatch => ({
    fetchSpaceXAPIStart: () => dispatch(fetchSpaceXAPIStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);