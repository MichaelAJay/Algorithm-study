#include <iostream>
#include <vector>

using std::vector;

int get_fibonacci_last_digit(int n)
{
    if (n <= 1)
    {
        return n;
    }
    // long long *fibArray = new long long[n];
    vector<long long> fibArray(n);
    fibArray[0] = 0;
    fibArray[1] = 1;

    for (int i = 0; i < n - 1; ++i)
    {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }

    return fibArray[n - 1] % 10;
}

int main()
{
    int n;
    std::cin >> n;
    int c = get_fibonacci_last_digit(n);
    std::cout << c << '\n';
}
