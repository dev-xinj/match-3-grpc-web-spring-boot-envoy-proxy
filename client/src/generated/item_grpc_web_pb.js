/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.29.3
// source: item.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = require('./item_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ItemServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ItemServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.Matrix>}
 */
const methodDescriptor_ItemService_generateMatrix = new grpc.web.MethodDescriptor(
  '/ItemService/generateMatrix',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.Matrix,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Matrix.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Matrix)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Matrix>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ItemServiceClient.prototype.generateMatrix =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ItemService/generateMatrix',
      request,
      metadata || {},
      methodDescriptor_ItemService_generateMatrix,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Matrix>}
 *     Promise that resolves to the response
 */
proto.ItemServicePromiseClient.prototype.generateMatrix =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ItemService/generateMatrix',
      request,
      metadata || {},
      methodDescriptor_ItemService_generateMatrix);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Matrix,
 *   !proto.Axis>}
 */
const methodDescriptor_ItemService_scanMatrix = new grpc.web.MethodDescriptor(
  '/ItemService/scanMatrix',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.Matrix,
  proto.Axis,
  /**
   * @param {!proto.Matrix} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Axis.deserializeBinary
);


/**
 * @param {!proto.Matrix} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.Axis>}
 *     The XHR Node Readable Stream
 */
proto.ItemServiceClient.prototype.scanMatrix =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/ItemService/scanMatrix',
      request,
      metadata || {},
      methodDescriptor_ItemService_scanMatrix);
};


/**
 * @param {!proto.Matrix} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.Axis>}
 *     The XHR Node Readable Stream
 */
proto.ItemServicePromiseClient.prototype.scanMatrix =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/ItemService/scanMatrix',
      request,
      metadata || {},
      methodDescriptor_ItemService_scanMatrix);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SwapRequest,
 *   !proto.Axis>}
 */
const methodDescriptor_ItemService_elementMatches = new grpc.web.MethodDescriptor(
  '/ItemService/elementMatches',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.SwapRequest,
  proto.Axis,
  /**
   * @param {!proto.SwapRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Axis.deserializeBinary
);


/**
 * @param {!proto.SwapRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.Axis>}
 *     The XHR Node Readable Stream
 */
proto.ItemServiceClient.prototype.elementMatches =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/ItemService/elementMatches',
      request,
      metadata || {},
      methodDescriptor_ItemService_elementMatches);
};


/**
 * @param {!proto.SwapRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.Axis>}
 *     The XHR Node Readable Stream
 */
proto.ItemServicePromiseClient.prototype.elementMatches =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/ItemService/elementMatches',
      request,
      metadata || {},
      methodDescriptor_ItemService_elementMatches);
};


module.exports = proto;

