let mySprite: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffff33ffffffffffffffffffffffffffffffffffffff33ffffffffffffffffffffffffffffffffffffff33ffffffffffffffffffffffffffffffffffffff33ffffffffffffffff
    fffffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffff3ffffffffffffffff
    fffffffffffffffffffff3333ffffffffffffffffffffffffffffffffffff3333ffffffffffffffffffffffffffffffffffff3333ffffffffffffffffffffffffffffffffffff3333fffffffffffffff
    ffffffffffffffffffff33333fffffffffffffffffffffffffffffffffff33333fffffffffffffffffffffffffffffffffff33333fffffffffffffffffffffffffffffffffff33333fffffffffffffff
    fffffffffffffffffff3333333fffffffffffffffffffffffffffffffff3333333fffffffffffffffffffffffffffffffff3333333fffffffffffffffffffffffffffffffff3333333ffffffffffffff
    fffffffffffffffffff33333f3fffffffffffffffffffffffffffffffff33333f3fffffffffffffffffffffffffffffffff33333f3fffffffffffffffffffffffffffffffff33333f3ffffffffffffff
    ffffffffffffbfffffff3333ffffffffffffffffffffffffffffbfffffff3333ffffffffffffffffffffffffffffbfffffff3333ffffffffffffffffffffffffffffbfffffff3333ffffffffffffffff
    ffffffffffffbffffff3333333ffffffffffffffffffffffffffbffffff3333333ffffffffffffffffffffffffffbffffff3333333ffffffffffffffffffffffffffbffffff3333333ffffffffffffff
    ffffffffffffbfffff33333333ffffffffffffffffffffffffffbfffff33333333ffffffffffffffffffffffffffbfffff33333333ffffffffffffffffffffffffffbfffff33333333ffffffffffffff
    ffffffffffffbffff33333333333ffffffffffffffffffffffffbffff33333333333ffffffffffffffffffffffffbffff33333333333ffffffffffffffffffffffffbffff33333333333ffffffffffff
    ff33ffffffffbff3f3333333333333ffffbfffffff33ffffffffbff3f3333333333333ffffbfffffff33ffffffffbff3f3333333333333ffffbfffffff33ffffffffbff3f3333333333333ffffbfffff
    f33333ffffffbff333333333333333ffffbffffff33333ffffffbff333333333333333ffffbffffff33333ffffffbff333333333333333ffffbffffff33333ffffffbff333333333333333ffffbfffff
    33333333ffffbfff33333333333333ffffbfffff33333333ffffbfff33333333333333ffffbfffff33333333ffffbfff33333333333333ffffbfffff33333333ffffbfff33333333333333ffffbfffff
    333333333ffffbffff333333333333ffffbfffff333333333ffffbffff333333333333ffffbfffff333333333ffffbffff333333333333ffffbfffff333333333ffffbffff333333333333ffffbfffff
    d33333333fffffbffff3333333eeeeeefbbffff3f33333333fffffbffff3333333eeeeeefbbffff3f33333333fffffbffff3333333eeeeeefbbffff3f33333333fffffbffff3333333eeeeeefbbffff3
    d333333333fffffbb3333333eeeeeeeeebffff3ff333333333fffffbb3333333eeeeeeeeebffff3ff333333333fffffbb3333333eeeeeeeeebffff3ff333333333fffffbb3333333eeeeeeeeebffff3f
    33333333ffffffffbb33333333ee3ee3bbffffff33333333ffffffffbb33333333ee3ee3bbffffff33333333ffffffffbb33333333ee3ee3bbffffff33333333ffffffffbb33333333ee3ee3bbffffff
    333333333ffffff333b3333333e333ebb3fffff3333333333ffffff333b3333333e333ebb3fffff3333333333ffffff333b3333333e333ebb3fffff3333333333ffffff333b3333333e333ebb3fffff3
    3333b33ffffff33333333333333333bbffffff333333b33ffffff33333333333333333bbffffff333333b33ffffff33333333333333333bbffffff333333b33ffffff33333333333333333bbffffff33
    3333b3333fffff333333333333333bbfffffff333333b3333fffff333333333333333bbfffffff333333b3333fffff333333333333333bbfffffff333333b3333fffff333333333333333bbfffffff33
    3333b33b33ffffff3333eeeee333333fffffff333333b33b33ffffff3333eeeee333333fffffff333333b33b33ffffff3333eeeee333333fffffff333333b33b33ffffff3333eeeee333333fffffff33
    3333b33b33fffff3eeeeeeeeee333333333fff333333b33b33fffff3eeeeeeeeee333333333fff333333b33b33fffff3eeeeeeeeee333333333fff333333b33b33fffff3eeeeeeeeee333333333fff33
    3333b3b333ffffeeeeeeeeeee33eee33333fff333333b3b333ffffeeeeeeeeeee33eee33333fff333333b3b333ffffeeeeeeeeeee33eee33333fff333333b3b333ffffeeeeeeeeeee33eee33333fff33
    3333bbb3443f333eeeeeeeeeeee3eee333fffff33333bbb3ee3f333eeeeeeeeeeee3eee333fffff33333bbb3443f333eeeeeeeeeeee3eee333fffff33333bbb3ee3f333eeeeeeeeeeee3eee333fffff3
    3333bb344333eeeeeeeeeeeeeeee3eee33ffff333333bb3ee333eeeeeeeeeeeeeeee3eee33ffff333333bb344333eeeeeeeeeeeeeeee3eee33ffff333333bb3ee333eeeeeeeeeeeeeeee3eee33ffff33
    333bb33333eeeeeeeeeeeeeeeeeee33333333333333bb33333eeeeeeeeeeeeeeeeeee33333333333333bb33333eeeeeeeeeeeeeeeeeee33333333333333bb33333eeeeeeeeeeeeeeeeeee33333333333
    33bb3333eeeeeeeeeeeeeeee3bb333333333b33333bb3333eeeeeeeeeeeeeeee3bb333333333b33333bb3333eeeeeeeeeeeeeeee3bb333333333b33333bb3333eeeeeeeeeeeeeeee3bb333333333b333
    33b333343333eee3ee3ee3ee3bb333ee3333b33333b333343333eee3ee3ee3ee3bb333443333b33333b333343333eee3ee3ee3ee3bb333ee3333b33333b333343333eee3ee3ee3ee3bb333ee3333b333
    33b3b333333eee3ee33eee333bb333bee333b33333b3b333333eee3ee33eee333bb333b44333b33333b3b333333eee3ee33eee333bb333bee333b33333b3b333333eee3ee33eee333bb333bee333b333
    3bb3b333333e333e33333e333bb333b33333b3333bb3b333333e333e33333e333bb333b33333b3333bb3b333333e333e33333e333bb333b33333b3333bb3b333333e333e33333e333bb333b33333b333
    3bbbb33333333433344333333bb333b333333b333bbbb33333333433344333333bb333b333333b333bbbb33333333e333ee333333bb333b333333b333bbbb33333333e333ee333333bb333b333333b33
    3bbb333333334433443333333bb333b333333b333bbb333333334433443333333bb333b333333b333bbb33333333ee33ee3333333bb333b333333b333bbb33333333ee33ee3333333bb333b333333b33
    3b333333333343333333b3333bb33b3333333bbb3b333333333343333333b3333bb33b3333333bbb3b3333333333e3333333b3333bb33b3333333bbb3b3333333333e3333333b3333bb33b3333333bbb
    bb333333333333333333b3333bbb3b333333333bbb333333333333333333b3333bbb3b333333333bbb333333333333333333b3333bbb3b333333333bbb333333333333333333b3333bbb3b333333333b
    3b333333333333333333b3333bbbb333333333333b333333333333333333b3333bbbb333333333333b333333333333333333b3333bbbb333333333333b333333333333333333b3333bbbb33333333333
    3b333333333333333333b3333bbbb333eee333333b333333333333333333b3333bbbb333eee333333b333333333333333333b3333bbbb333eee333333b333333333333333333b3333bbbb333eee33333
    3beee33eee3333333333b3333bbb333eee3333333beee33eee3333333333b3333bbb333eee3333333beee33eee3333333333b3333bbb333eee3333333beee33eee3333333333b3333bbb333eee333333
    eeeeee33eee333333333b3333bbb33eee33eeeeeeeeeee33eee333333333b3333bbb33eee33eeeeeeeeeee33eee333333333b3333bbb33eee33eeeeeeeeeee33eee333333333b3333bbb33eee33eeeee
    eeee3333beee33333333b3333bbb33333eeeeeeeeeee3333beee33333333b3333bbb33333eeeeeeeeeee3333beee33333333b3333bbb33333eeeeeeeeeee3333beee33333333b3333bbb33333eeeeeee
    eeeeeee3b33333333b33b3333bbb3333eeeeeeeeeeeeeee3b33333333b33b3333bbb3333eeeeeeeeeeeeeee3b33333333b33b3333bbb3333eeeeeeeeeeeeeee3b33333333b33b3333bbb3333eeeeeeee
    eeeeeeeeee3333333b33b3333bbbb3eeee3eeeeeeeeeeeeeee3333333b33b3333bbbb3eeee3eeeeeeeeeeeeeee3333333b33b3333bbbb3eeee3eeeeeeeeeeeeeee3333333b33b3333bbbb3eeee3eeeee
    eeeee3eeee3333333b33b3333bbbeeeebe33ee3eeeeee3eeee3333333b33b3333bbbeeeebe33ee3eeeeee3eeee3333333b33b3333bbbeeeebe33ee3eeeeee3eeee3333333b33b3333bbbeeeebe33ee3e
    3eee333bb3bb33333b33b3333bbbbeeeb33ee3333eee333bb3bb33333b33b3333bbbbeeeb33ee3333eee333bb3bb33333b33b3333bbbbeeeb33ee3333eee333bb3bb33333b33b3333bbbbeeeb33ee333
    33be333bb3b333333bb3bb333bbbb333bb33333333be333bb3b333333bb3bb333bbbb333bb33333333be333bb3b333333bb3bb333bbbb333bb33333333be333bb3b333333bb3bb333bbbb333bb333333
    33b3333bbbb3333333bbbb333bbbb333bb33333333b3333bbbb3333333bbbb333bbbb333bb33333333b3333bbbb3333333bbbb333bbbb333bb33333333b3333bbbb3333333bbbb333bbbb333bb333333
    33b3333bb3333333333bbb333bbbb333bb33333333b3333bb3333333333bbb333bbbb333bb33333333b3333bb3333333333bbb333bbbb333bb33333333b3333bb3333333333bbb333bbbb333bb333333
    33b3333bb33333333333bbb33bbbb333bb33333333b3333bb33333333333bbb33bbbb333bb33333333b3333bb33333333333bbb33bbbb333bb33333333b3333bb33333333333bbb33bbbb333bb333333
    333b333bb33333333333bbb33bbbb333bb333333333b333bb33333333333bbb33bbbb333bb333333333b333bb33333333333bbb33bbbb333bb333333333b333bb33333333333bbb33bbbb333bb333333
    333bb3bbb3333ee3eee33eb33bbbb333bb33b333333bb3bbb3333ee3eee33eb33bbbb333bb33b333333bb3bbb3333ee3eee33eb33bbbb333bb33b333333bb3bbb3333ee3eee33eb33bbbb333bb33b333
    333bbbbbb333eeeeeeeeeeee3bbbbb33bb33b333333bbbbbb333eeeeeeeeeeee3bbbbb33bb33b333333bbbbbb333eeeeeeeeeeee3bbbbb33bb33b333333bbbbbb333eeeeeeeeeeee3bbbbb33bb33b333
    3333bbbbb33eeeeeeeeeeeeebbbbbb3bb33bb3333333bbbbb33eeeeeeeeeeeeebbbbbb3bb33bb3333333bbbbb33eeeeeeeeeeeeebbbbbb3bb33bb3333333bbbbb33eeeeeeeeeeeeebbbbbb3bb33bb333
    33333bbbb333ee3eeeeeee3ebbbbbb3bb33b333333333bbbb333ee3eeeeeee3ebbbbbb3bb33b333333333bbbb333ee3eeeeeee3ebbbbbb3bb33b333333333bbbb333ee3eeeeeee3ebbbbbb3bb33b3333
    33333bbb334433eeeeee3e33bbbbbb3bb3b3333333333bbb334433eeeeee3e33bbbbbb3bb3b3333333333bbb334433eeeeee3e33bbbbbb3bb3b3333333333bbb334433eeeeee3e33bbbbbb3bb3b33333
    33333bbb33333ee33ee33e33bbbbbb3bbb33333333333bbb33333ee33ee33e33bbbbbb3bbb33333333333bbb33333ee33ee33e33bbbbbb3bbb33333333333bbb33333ee33ee33e33bbbbbb3bbb333333
    33333bbb333b3e33333333333bbbbbbb3333333333333bbb333b3e33333333333bbbbbbb3333333333333bbb333b3e33333333333bbbbbbb3333333333333bbb333b3e33333333333bbbbbbb33333333
    33333bbb333b3333333333333bbbbbbb3333333333333bbb333b3333333333333bbbbbbb3333333333333bbb333b3333333333333bbbbbbb3333333333333bbb333b3333333333333bbbbbbb33333333
    33333bbb333b3b33333333333bbbbbbb3333333333333bbb333b3b33333333333bbbbbbb3333333333333bbb333b3b33333333333bbbbbbb3333333333333bbb333b3b33333333333bbbbbbb33333333
    33333bbb333b3b33333333333bbbbbb33333333333333bbb333b3b33333333333bbbbbb33333333333333bbb333b3b33333333333bbbbbb33333333333333bbb333b3b33333333333bbbbbb333333333
    33333bbb333b3b33333333333bbbbb333333333333333bbb333b3b33333333333bbbbb333333333333333bbb333b3b33333333333bbbbb333333333333333bbb333b3b33333333333bbbbb3333333333
    33333bb3333bbb33333333333bbbbb333333333333333bb3333bbb33333333333bbbbb333333333333333bb3333bbb33333333333bbbbb333333333333333bb3333bbb33333333333bbbbb3333333333
    33333bb333bbb333333333333bbbbb333333333333333bb333bbb333333333333bbbbb333333333333333bb333bbb333333333333bbbbb333333333333333bb333bbb333333333333bbbbb3333333333
    3333bbb333b333333333ff333bbbbb3f333333333333bbb333b333333333ff333bbbbb3f333333333333bbb333b333333333ff333bbbbb3f333333333333bbb333b333333333ff333bbbbb3f33333333
    3333bbb333b3333333333ff3bbbbbb33ff3333f33333bbb333b3333333333ff3bbbbbb33ff3333f33333bbb333b3333333333ff3bbbbbb33ff3333f33333bbb333b3333333333ff3bbbbbb33ff3333f3
    3333bbb3bbb3333333333333bbbbbbb33f333ff33333bbb3bbb3333333333333bbbbbbb33f333ff33333bbb3bbb3333333333333bbbbbbb33f333ff33333bbb3bbb3333333333333bbbbbbb33f333ff3
    ff33bbbbbb33333333f33333bbbbbbb333333f33ff33bbbbbb33333333f33333bbbbbbb333333f33ff33bbbbbb33333333f33333bbbbbbb333333f33ff33bbbbbb33333333f33333bbbbbbb333333f33
    3ff3bbbbb33ff3333ff3333fbbbbbbbf333333333ff3bbbbb33ff3333ff3333fbbbbbbbf333333333ff3bbbbb33ff3333ff3333fbbbbbbbf333333333ff3bbbbb33ff3333ff3333fbbbbbbbf33333333
    3fffbbbbb333ff33ff33f3ffbbbbbbbf333f33333fffbbbbb333ff33ff33f3ffbbbbbbbf333f33333fffbbbbb333ff33ff33f3ffbbbbbbbf333f33333fffbbbbb333ff33ff33f3ffbbbbbbbf333f3333
    3fffbbb333333333f33fffffbbbbbbbff3ff33f33fffbbb333333333f33fffffbbbbbbbff3ff33f33fffbbb333333333f33fffffbbbbbbbff3ff33f33fffbbb333333333f33fffffbbbbbbbff3ff33f3
    ffffbbbf33333333333fffffbbbbbbbffff33fffffffbbbf33333333333fffffbbbbbbbffff33fffffffbbbf33333333333fffffbbbbbbbffff33fffffffbbbf33333333333fffffbbbbbbbffff33fff
    ffffbbbf333f33fff33fffffbbbbbbbfffffffffffffbbbf333f33fff33fffffbbbbbbbfffffffffffffbbbf333f33fff33fffffbbbbbbbfffffffffffffbbbf333f33fff33fffffbbbbbbbfffffffff
    ffffbbbf33fff3ffff3fffffbbbbbbbfffffffffffffbbbf33fff3ffff3fffffbbbbbbbfffffffffffffbbbf33fff3ffff3fffffbbbbbbbfffffffffffffbbbf33fff3ffff3fffffbbbbbbbfffffffff
    ffffbbbfffffffffffffffffbbbbbbbfffffffffffffbbbfffffffffffffffffbbbbbbbfffffffffffffbbbfffffffffffffffffbbbbbbbfffffffffffffbbbfffffffffffffffffbbbbbbbfffffffff
    ffffbbb3ffffffffffffffffbbbbbbbfffffffffffffbbb3ffffffffffffffffbbbbbbbfffffffffffffbbb3ffffffffffffffffbbbbbbbfffffffffffffbbb3ffffffffffffffffbbbbbbbfffffffff
    ffffbbb3ffffffffffffffffbbbbbbbfffffffffffffbbb3ffffffffffffffffbbbbbbbfffffffffffffbbb3ffffffffffffffffbbbbbbbfffffffffffffbbb3ffffffffffffffffbbbbbbbfffffffff
    ffffbbbbffffffffffffffffbbbbbbbfffffffffffffbbbbffffffffffffffffbbbbbbbfffffffffffffbbbbffffffffffffffffbbbbbbbfffffffffffffbbbbffffffffffffffffbbbbbbbfffffffff
    ffffbbbbffffffffffffffffbbbbbbbfffffffffffffbbbbffffffffffffffffbbbbbbbfffffffffffffbbbbffffffffffffffffbbbbbbbfffffffffffffbbbbffffffffffffffffbbbbbbbfffffffff
    ffffbbbbffffffffffffffffbbbbbbbfffffffffffffbbbbffffffffffffffffbbbbbbbfffffffffffffbbbbffffffffffffffffbbbbbbbfffffffffffffbbbbffffffffffffffffbbbbbbbfffffffff
    ffffbbbb3fffffffffffffffbbbbbbbfffffffffffffbbbb3fffffffffffffffbbbbbbbfffffffffffffbbbb3fffffffffffffffbbbbbbbfffffffffffffbbbb3fffffffffffffffbbbbbbbfffffffff
    ffffbbbbbfffffffffffffffbbbbbbbfffffffffffffbbbbbfffffffffffffffbbbbbbbfffffffffffffbbbbbfffffffffffffffbbbbbbbfffffffffffffbbbbbfffffffffffffffbbbbbbbfffffffff
    ffffbbbbbfffffffffffffffbbbbbbbfffffffffffffbbbbbfffffffffffffffbbbbbbbfffffffffffffbbbbbfffffffffffffffbbbbbbbfffffffffffffbbbbbfffffffffffffffbbbbbbbfffffffff
    ffffbbbbb3fffffffffffff3bbbbbbb3ffffffffffffbbbbb3fffffffffffff3bbbbbbb3ffffffffffffbbbbb3fffffffffffff3bbbbbbb3ffffffffffffbbbbb3fffffffffffff3bbbbbbb3ffffffff
    ffffbbbbb3fffffffffffffbbbbbbbb3ffffffffffffbbbbb3fffffffffffffbbbbbbbb3ffffffffffffbbbbb3fffffffffffffbbbbbbbb3ffffffffffffbbbbb3fffffffffffffbbbbbbbb3ffffffff
    fff3bbbbbbfffffffffffffbbbbbbbbbfffffffffff3bbbbbbfffffffffffffbbbbbbbbbfffffffffff3bbbbbbfffffffffffffbbbbbbbbbfffffffffff3bbbbbbfffffffffffffbbbbbbbbbffffffff
    fff3bbbbbbffffffffffff3bbbbbbbbbfffffffffff3bbbbbbffffffffffff3bbbbbbbbbfffffffffff3bbbbbbffffffffffff3bbbbbbbbbfffffffffff3bbbbbbffffffffffff3bbbbbbbbbffffffff
    ee3bbbbbbb3fffffffffffbbbbbbbbeeeeeeeeeeee3bbbbbbb3fffffffffffbbbbbbbbeeeeeeeeeeee3bbbbbbb3fffffffffffbbbbbbbbeeeeeeeeeeee3bbbbbbb3fffffffffffbbbbbbbbeeeeeeeeee
    eeeeeeeebbbfffffffff33bbbeeeeeeeeeeeeeeeeeeeeeeebbbfffffffff33bbbeeeeeeeeeeeeeeeeeeeeeeebbbfffffffff33bbbeeeeeeeeeeeeeeeeeeeeeeebbbfffffffff33bbbeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
mySprite.setPosition(68, 43)
mySprite = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
