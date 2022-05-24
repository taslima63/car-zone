import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('http://localhost:5000/reviews').then(res => res.json()));

    const imgStorageKey = 'd26486fbf899cc0039af503b11596d17';

    if (isLoading) {
        return <Loading></Loading>
    }

    const onSubmit = async data => {
        const image = data.image[0];
        console.log(image);
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        console.log('api', url);

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    console.log("Img", img);
                    const review = {
                        name: data.name,
                        comment: data.comment,
                        rating: parseInt(data.rating),
                        img: img
                    }
                    // send to db
                    fetch('http://localhost:5000/reviews', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(review)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log("object", review);
                            console.log(inserted.insertedId);
                            if (inserted.insertedId) {
                                toast.success('Review added Successfully')
                                reset();

                            } else {
                                toast.error('failed to insert the Review Info');
                            }
                        })
                }
                console.log('imgbb', result);
            });

    }

    return (
        <div>
            <h2 className="text-center text-2xl font-bold">Add Your Review</h2>
            <div className='flex justify-center items-center my-4'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body ">

                        {/*  <div className='flex justify-center my-4'> */}
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/**** name field ****/}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered input-sm  w-full max-w-xs "
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>


                            {/**** comment Field ****/}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Comment</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Comment"
                                    className="input input-bordered input-sm w-full max-w-xs"
                                    {...register("comment", {
                                        required: {
                                            value: true,
                                            message: 'Comment is Required'
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.comment?.type === 'required' && <span className="label-text-alt text-red-500">{errors.comment.message}</span>}
                                </label>
                            </div>


                            {/* rating field */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Rating  "
                                    className="input input-sm input-bordered w-full max-w-xs"
                                    {...register("rating", {
                                        required: {
                                            value: true,
                                            message: 'Rating Quantity is Required'
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                                </label>
                            </div>

                            {/**** Image upload Field  ****/}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input
                                    type="file"
                                    className="input input-bordered input-sm w-full max-w-xs"
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: 'Image is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                                </label>
                            </div>
                            {/*****  Add Button *****/}

                            <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
                        </form>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default AddReview;