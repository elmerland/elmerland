require 'fileutils'

FileUtils.rm_rf('gnu_formatted')
FileUtils.mkdir_p('gnu_formatted')
# FileUtils.cp_r(Dir['gnu/*.html'], 'gnu_formatted');

# files = Dir['gnu_formatted/*.html']

# files.each do |file|
#   print file + "\n"
# end

Dir['gnu/*.html'].each do |input_file|
  output_file = 'gnu_formatted/' + (File.basename input_file)
  File.open(output_file , "w") do |out_file|
    is_inside_body = false;
    File.foreach(input_file) do |line|
      if is_inside_body
        break if line.start_with? '</body>'
        line = line.sub '<td>&nbsp;&nbsp;</td>', ''
        out_file.puts line
      else
        is_inside_body = true if line.start_with? '<body'
      end
    end
  end
end
