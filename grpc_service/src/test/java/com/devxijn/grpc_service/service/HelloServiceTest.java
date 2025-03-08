package com.devxijn.grpc_service.service;

import com.devxijn.grpc_service.entity.HelloReply;
import com.devxijn.grpc_service.entity.HelloRequest;
import com.devxijn.grpc_service.entity.SimpleGrpc;
import io.grpc.inprocess.InProcessChannelBuilder;
import io.grpc.inprocess.InProcessServerBuilder;
import io.grpc.testing.GrpcCleanupRule;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;

import static org.junit.Assert.*;

public class HelloServiceTest {
    @Rule
    public final GrpcCleanupRule grpcCleanup = new GrpcCleanupRule();

    @Before
    public void setUp() throws Exception {
    }

    @Test
    public void greet_shouldReturnHello() throws Exception {
        // Arrange
        String name = "World";
        HelloService service = new HelloService();
        String serverName = InProcessServerBuilder.generateName();

        grpcCleanup.register(InProcessServerBuilder
                .forName(serverName)
                .directExecutor()
                .addService(service)
                .build()
                .start());

        SimpleGrpc.SimpleBlockingStub stub = SimpleGrpc.newBlockingStub(
                grpcCleanup.register(InProcessChannelBuilder.forName(serverName).directExecutor().build()));

        // Act
        HelloReply response = stub.sayHello(HelloRequest.newBuilder().setName(name).build());

        // Assert
        assertEquals("Hello reply", response.getName());
    }
}