# ASSESSMENT 4: Ruby Coding Practical Questions

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.


fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]


def sorter arr
    finish = []
    arr.each do |value|
        if value.is_a?(Integer)
            if value % 2 != 0
                finish.push(value)
            end
        end
    end
    finish.sort! {|x,y| x <=> y}
end

print sorter fullArr1
puts ""
print sorter fullArr2
puts ""

# --------------------2) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data from the bike object.


class Bike
    def initialize(model, frame, wheels=2)
        @model = model
        @wheels = wheels
        @frame = frame
        @speed = 0
    end

    def get_info
    "The #@model bike has #@wheels wheels and a #@frame frame."
    end

    def ring_bell
        'Beep beep!'
    end

    def speed
        @speed
    end

    def pedal_faster
        @speed += 10
    end

    def brake
        if @speed - 15 < 0
            @speed = 0
        else
            @speed -= 15
        end
    end

end

my_bike = Bike.new('Trek', '168cm')
puts my_bike.get_info

# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'


# -------------------3) Add a bell to the bike class and create a method that will ring the bell when the method is called.

puts my_bike.ring_bell



# Expected output example: my_bike.ring_bell => 'Beep beep!'


# -------------------4) Add a speedometer to the Bike class. The speed should be initialized at 0.



puts my_bike.speed

# Expected output example: my_bike.speed => 0


# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.


puts my_bike.pedal_faster
puts my_bike.pedal_faster
puts my_bike.brake
puts my_bike.brake


# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
