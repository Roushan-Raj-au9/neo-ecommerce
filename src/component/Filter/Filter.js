import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import './Filter.css'
import FilterContext from '../../context/filter/filterContext';

const Filter = () => {
    const filterContext = useContext(FilterContext)
    const { priceRange, setPriceRange, ratingRange, setRatingRange, sortRange, setSortRange,categoryRange,setCategoryRange, filterHandler } = filterContext;
    return (
        <>
            <div className='d-flex justify-content-between align-items-center'>
                <h3>Filters</h3>
                <span className='text-decoration-underline clear' onClick={() => {
                    setPriceRange(10000)
                    setRatingRange("")
                    setSortRange("")
                    setCategoryRange('all')
                }}>Clear</span>
            </div>
            <div className='mt-5'>
                <h5>Price</h5>
                <div>
                    <div className='range_label d-flex justify-content-between'>
                        <div>0</div>
                        <div className='ps-3'>5k</div>
                        <div>10k</div>
                    </div>
                    <Form.Range
                        min={0}
                        max={10000}
                        value={priceRange}
                        step={1000}
                        onChange={filterHandler(setPriceRange)}
                    />
                </div>
            </div>
            <div className='mt-3'>
                <h5>Category</h5>
                <div>
                    <Form.Check
                        type='radio'
                        name='category'
                        label="Kids"
                        value="kid"
                        checked={categoryRange === 'kid'}
                        onChange={filterHandler(setCategoryRange)}
                        className='mb-2'
                    />
                    <Form.Check
                        type='radio'
                        name='category'
                        label="Adults"
                        value="adult"
                        checked={categoryRange === 'adult'}
                        onChange={filterHandler(setCategoryRange)}
                        className='mb-2'
                    />
                    <Form.Check
                        type='radio'
                        name='category'
                        label="All"
                        value="all"
                        checked={categoryRange === 'all'}
                        onChange={filterHandler(setCategoryRange)}
                        className='mb-2'
                    />
                </div>
            </div>
            <div className='mt-3'>
                <h5>Rating</h5>
                {
                    RatingOptions.map(({ label, value }, idx) => (
                        <Form.Check
                            type='radio'
                            name='rating'
                            label={label}
                            value={value}
                            onChange={filterHandler(setRatingRange)}
                            key={idx}
                            checked={value === ratingRange}
                            className='mb-2'
                        />
                    ))
                }
            </div>
            <div className='mt-3'>
                <h5>Sort By</h5>
                <Form.Check
                    type='radio'
                    name='sortby'
                    label="Low to High"
                    value="lowtohigh"
                    checked={sortRange === 'lowtohigh'}
                    onChange={filterHandler(setSortRange)}
                    className='mb-2'
                />
                <Form.Check
                    type='radio'
                    name='sortby'
                    label="Hight to Low"
                    value="hightolow"
                    checked={sortRange === 'hightolow'}
                    onChange={filterHandler(setSortRange)}
                    className='mb-2'
                />
            </div>
        </>
    )
}

export default Filter;

const RatingOptions = [
    {
        label: '4 Stars & above',
        value: '4'
    },
    {
        label: '3 Stars & above',
        value: '3'
    },
    {
        label: '2 Stars & above',
        value: '2'
    },
    {
        label: '1 Stars & above',
        value: '1'
    },
]