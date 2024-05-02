#!/usr/bin/env python3
''' make_multiplier module '''
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    ''' Takes a float multiplier as argument and
    returns a function that multiplies a float by multiplier.'''
    def multiplier_func(number: float) -> float:
        """Multiplies a float by multiplier"""
        return multiplier * number

    return multiplier_func
