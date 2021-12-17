import React from 'react';
import {
    Camera,
    Home,
    Info
} from 'react-feather';

const CameraIcon = () => {
    return <Camera size={16} />
};

const HomeIcon = () => {
    return <Home size={16} />
};

const InfoIcon = () => {
    return <Info size={16} />
};

export {
    CameraIcon as Camera,
    HomeIcon as Home,
    InfoIcon as Info
};