#!/usr/bin/env python3
''' Sum list of floats modules '''
from typing import List


def sum_list(input_list: List[float]) -> float:
    ''' Takes a list input_list of floats as argument and
    returns their sum as a float. '''
    if input_list is None:
        return 0
    else:
        return sum(input_list)
