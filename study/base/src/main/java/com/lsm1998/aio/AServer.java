package com.lsm1998.aio;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.channels.AsynchronousChannelGroup;
import java.nio.channels.AsynchronousServerSocketChannel;
import java.nio.channels.AsynchronousSocketChannel;
import java.nio.channels.CompletionHandler;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * 异步IO服务器
 *
 */
public class AServer {
    private static final int PORT = 30001;

    public void init() {
        try {
            //创建一个线程池
            ExecutorService executor = Executors.newFixedThreadPool(20);
            //以指定线程池来创建一个AsynchronousChannelGroup
            AsynchronousChannelGroup channelGroup = AsynchronousChannelGroup.withThreadPool(executor);
            //以指定线程池来创建一个AsynchronousServerSocketChannel
            AsynchronousServerSocketChannel serverChannel = AsynchronousServerSocketChannel.open(channelGroup).bind(new InetSocketAddress(PORT));
            //使用CompletionHandler接收来自客户端的连接请求(回调)
            serverChannel.accept(null, new AcceptHandler(serverChannel));
            // 主线程继续自己的行为
            Thread.sleep(50000);
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) throws Exception {
        new AServer().init();
        System.out.println("NIO Server Started");
        CountDownLatch latch=new CountDownLatch(1);
        latch.await();
    }
}
