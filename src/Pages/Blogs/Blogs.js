import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="bg-blogs p-8">
      <div>
        <h1 className="text-2xl font-bold p-4">
          {" "}
          How will you improve the performance of a React Application?
        </h1>
        <p className="text-sm font-semibold p-4">
          Keeping component state local where necessary. Memoizing React
          components to prevent unnecessary re-renders. Code-splitting in React
          using dynamic import() Windowing or list virtualization in React. Lazy
          loading images in React.
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-bold p-4">
          What are the different ways to manage a state in a React application?
        </h1>
        <p className="text-sm font-semibold p-4">
          A state is a JavaScript object. It stores a component’s dynamic data
          and determines the component’s behavior. In other words, it is the
          interface between any data of changes (backend or local) and the
          representation of this data with UI elements in the frontend. The
          state helps in keeping the data of different components in sync since
          each state update will re-render all relevant components. It can also
          act as a medium to communicate between various components. Managing
          state is one of the hardest parts of any application, and that is why
          there are so many state management libraries/tools available,
          including Redux and more.
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-bold p-4">
          How does prototypical inheritance work?
        </h1>
        <p className="text-sm font-semibold p-4">
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the [[Prototype]] of an object,
          we use Object. getPrototypeOf and Object.
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-bold p-4">
          Why you do not set the state directly in React. For example, if you
          have const [products, setProducts] = useState([]). Why you do not set
          products = [...] instead, you use the setProducts
        </h1>
        <p className="text-sm font-semibold p-4">
          One should never update the state directly because of the following
          reasons: If you update it directly, calling the setState() afterward
          may just replace the update you made. When you directly update the
          state, it does not change this.
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-bold p-4">
          What is a unit test? Why should write unit tests?
        </h1>
        <p className="text-sm font-semibold p-4">
          The main objective of unit testing is to isolate written code to test
          and determine if it works as intended. Unit testing is an important
          step in the development process, because if done correctly, it can
          help detect early flaws in code which may be more difficult to find in
          later testing stages.Unit testing allows software developers to
          actually think through the design of the software and what has to be
          done before they write the code. This can help them to stay focused
          and can also help them to create much better designs.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
