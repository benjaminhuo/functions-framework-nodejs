/**
 * The OpenFunction's serving context.
 * @public
 */
export interface OpenFunctionContext {
  /**
   * The name of the context.
   */
  name: string;
  /**
   * The version of the context.
   */
  version: string;
  /**
   * The target runtime of the context.
   */
  runtime: keyof typeof RuntimeType;
  /**
   * Optional port string of the server.
   */
  port?: string;
  /**
   * Optional input binding object.
   */
  inputs?: OpenFunctionBinding;
  /**
   * Optional output binding object.
   */
  outputs?: OpenFunctionBinding;
}

/**
 * The binding interface of the context.
 * @public
 */
export interface OpenFunctionBinding {
  /**
   * The hash map of the binding.
   */
  [key: string]: OpenFunctionComponent;
}

/**
 * The component interface of the context.
 * @public
 */
export interface OpenFunctionComponent {
  /**
   * The name of the component.
   */
  componentName: string;
  /**
   * The type of the component.
   */
  componentType: `${ComponentType}.${string}`;
  /**
   * The uri of the component.
   */
  uri?: string;
  /**
   * Optional operation of the component.
   */
  operation?: string;
  /**
   * Optional metadata as hash map for the component.
   */
  metadata?: {[key: string]: string};
}

/**
 * Defining runtime type enumeration.
 * @public
 */
export enum RuntimeType {
  /**
   * The Knative type.
   */
  Knative = 'Knative',
  /**
   * The async type.
   */
  Async = 'Async',
}

/**
 * Defining component type enumeration.
 * @public
 */
export enum ComponentType {
  /**
   * The binding type.
   */
  Binding = 'bindings',
  /**
   * The pubsub type.
   */
  PubSub = 'pubsub',
}

/**
 * Provides a set of methods to help determine types used in FunctionContext.
 * @public
 */
export class ContextUtils {
  /**
   * Returns true if the runtime is Knative.
   * @param context - The OpenFunctionContext object.
   * @returns A boolean value.
   */
  static IsKnativeRuntime(context: OpenFunctionContext): boolean {
    return context?.runtime === RuntimeType.Knative;
  }
  /**
   * Returns true if the runtime is Async.
   * @param context - The OpenFunctionContext object.
   * @returns A boolean value.
   */
  static IsAsyncRuntime(context: OpenFunctionContext): boolean {
    return context?.runtime === RuntimeType.Async;
  }

  /**
   * Checks if the component is a binding component.
   * @param component - The component to check.
   * @returns A boolean value.
   */
  static IsBindingComponent(component: OpenFunctionComponent): boolean {
    return component?.componentType.split('.')[0] === ComponentType.Binding;
  }
  /**
   * Checks if the component is a pubsub component.
   * @param component - The component to check.
   * @returns A boolean value.
   */
  static IsPubSubComponent(component: OpenFunctionComponent): boolean {
    return component?.componentType.split('.')[0] === ComponentType.PubSub;
  }
}
