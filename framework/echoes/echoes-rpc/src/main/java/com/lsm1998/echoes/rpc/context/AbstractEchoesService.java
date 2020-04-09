package com.lsm1998.echoes.rpc.context;

import com.lsm1998.echoes.config.EchoesConfig;
import com.lsm1998.echoes.rpc.EchoesService;

/**
 * @program: code
 * @description:
 * @author: lsm
 * @create: 2020-04-01 18:26
 **/
public abstract class AbstractEchoesService implements EchoesService
{
    abstract void classProxy(EchoesConfig.Rpc rpc);
}