import "reflect-metadata";

import Inject from "./decorators/inject";
import Injectable from "./decorators/injectable";

import Class from "./types/class";

import IBind from "./container/bind";
import IContainer from "./container/container";
import Bind from "./container/impl/bind_impl";
import Container from "./container/impl/container_impl";

export default IContainer;
export {
    Inject,
    Injectable,
    Class,
    IBind as IBind,
    IContainer as IContainer,
    Bind as Bind,
    Container as Container,
};
