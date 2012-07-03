class Kata
	constructor: (@input) ->
		@reg = /(-[a-z])(?:\s+)?((-?\d(,?))+|([\w/,]+))?/g
		@flags = []
		@values = []
		@defaults = []
		@
	parse: ->
		while ((matches = @reg.exec(@input)) != null)
			@flags.push matches[1]
			@values.push matches[2]
		@
	render: ->
		output = ''
		for flag,i in @flags
			if flag is '-d'
				if @is_dir @values[i]
					valor = @values[i] ? '/'
					output += "directorio=#{valor}\n"
				else 
					valor = @values[i] ? '0'
					output += "digitos=#{valor}\n"
			else if flag is '-l'
				valor = @values[i] ? 'true'
				output += "loggin=#{valor}\n"
			else if flag is '-p'
				valor = @values[i] ? '8888'
				output += "port=#{valor}\n"
			else if flag is '-g'
				valor = @values[i] ? ''
				output += "string=#{valor}\n"
			else
				output += "#{flag.substr(1)}=#{@values[i]}\n"
		output
	is_dir: (str) ->
		str.indexOf(',') == -1


window.Kata = Kata

# Defaults flags
# -l "loggin"
# -p "port"
# -d "directorio" || "digitos"
# -g "cadena"