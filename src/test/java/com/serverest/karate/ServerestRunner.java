package com.serverest.karate;

import com.intuit.karate.junit5.Karate;

class ServerestRunner {

    @Karate.Test
    Karate testAll() {
        return Karate.run("serverest").relativeTo(getClass());
    }

}